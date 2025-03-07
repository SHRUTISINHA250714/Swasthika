from typing import Dict
from fastapi import FastAPI, HTTPException
from langchain_google_genai import ChatGoogleGenerativeAI
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
load_dotenv()


app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)


GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# system_prompt = """
# You are a rehabilitation doctor specializing in post-surgery recovery, physical therapy, 
# mental health support, and chronic pain management. Provide expert medical advice, suggest 
# exercises, and offer emotional encouragement. Ensure responses are empathetic, evidence-based, 
# and suitable for different recovery stages.Do not refer to the doctor,instead consider yourself as a doctor and ask all the related questions acclrdingly and process them,if at the later stage,its too complicated than only refer to the doctor.
# """


llm = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash",
    temperature=0.7,
    google_api_key=GOOGLE_API_KEY,
    # system_message=system_prompt
) 
class ScreeningRequest(BaseModel):
    responses: Dict[str, str]

class DetailedAssessmentRequest(BaseModel):
    disease: str
    responses: Dict[str, str] 

screening_questions = {
    "PTSD": "Have you experienced a traumatic event that still causes distress?",
    "Depression": "Have you been feeling sad, hopeless, or lost interest in activities you once enjoyed?",
    "Anxiety": "Do you often feel nervous, anxious, or on edge, even without a clear reason?",
    "Stress": "Do you feel overwhelmed by daily life responsibilities?",
    "OCD": "Do you have repetitive thoughts or behaviors that you feel compelled to perform?",
    "Panic Disorder": "Have you ever experienced sudden intense fear, heart racing, or difficulty breathing?",
    "Substance Abuse": "Do you rely on alcohol or drugs to cope with emotions or stress?",
    "Eating Disorder": "Do you have concerns about your eating habits, weight, or body image?",
    "Drug Recovery": "Are you recovering from substance addiction but struggling with cravings?",
    "Alcohol Addiction": "Do you find it difficult to reduce your alcohol consumption?",
    "Anorexia Nervosa": "Do you restrict food intake and fear gaining weight?",
    "Bulimia Nervosa": "Do you engage in binge eating followed by purging (vomiting, excessive exercise, laxatives)?",
    "Binge Eating Disorder": "Do you frequently eat large amounts of food in a short time, even when not hungry?",
}

disease_specific_questions = {
    "PTSD": [
        "Do you experience flashbacks or nightmares related to past trauma?",
        "Do you avoid certain places or activities due to past trauma?",
        "Do sudden noises or events trigger intense fear or panic?"
    ],
    "Depression": [
        "Do you experience a persistent feeling of sadness or emptiness?",
        "Do you struggle with low energy and motivation daily?",
        "Have you had thoughts of self-harm or suicide?"
    ],
    "Anxiety": [
        "Do you experience physical symptoms like a racing heart, sweating, or trembling when anxious?",
        "Do you have excessive worrying that interferes with daily life?",
        "Do you find it hard to control your worries?"
    ],
    "OCD": [
        "Do you feel extreme distress if you are unable to complete a certain ritual?",
        "Do you repeatedly check things (like locks, stoves) even when unnecessary?",
        "Do you have unwanted intrusive thoughts that make you anxious?"
    ],
    "Panic Disorder": [
        "Do you experience episodes of intense fear without an obvious cause?",
        "Do you feel like you are losing control or having a heart attack during an episode?",
        "Have these episodes significantly affected your daily life?"
    ],
    "Substance Abuse": [
        "Do you feel guilty or ashamed about your substance use?",
        "Have you tried to quit or cut down but failed?",
        "Has your substance use affected your work, relationships, or daily responsibilities?"
    ],
    "Alcohol Addiction": [
        "Do you frequently drink more than you intend to?",
        "Do you experience withdrawal symptoms like sweating, shaking, or nausea when not drinking?",
        "Have you neglected responsibilities because of drinking?"
    ],
    "Eating Disorder": [
        "Do you feel out of control when eating?",
        "Do you feel guilt or shame after eating?",
        "Do you use extreme methods (fasting, purging, excessive exercise) to control weight?"
    ],
}
@app.get("/screening-questions")
async def get_screening_questions():
  return(screening_questions)
 
@app.post("/screening")
async def screening(request: ScreeningRequest):
    detected_diseases = []

    for disease, question in screening_questions.items():
        response = request.responses.get(disease, "").lower()
        if response in ["yes", "y"]:
            detected_diseases.append(disease)

    if not detected_diseases:
        return {"message": "No potential mental health conditions detected.", "diseases": []}

    return {
        "message": "Based on your responses, we suggest further assessment.",
        "diseases": detected_diseases
    }
@app.post("/detailed_assessment")
async def detailed_assessment(request: DetailedAssessmentRequest):
    disease = request.disease
    if disease not in disease_specific_questions:
        raise HTTPException(status_code=400, detail="Invalid disease category")

    return {
        "message": f"Please answer the following questions to assess the severity of {disease}.",
        "questions": disease_specific_questions[disease]
    }


# @app.post("/chat")
# async def chat(request: DetailedAssessmentRequest):
#     try:
#         if not request.responses:
#            raise HTTPException(status_code=400, detail="No responses p rovided")

#         response_text = "\n".join([f"{q}: {a}" for q, a in request.responses.items()])

#         system_prompt = f"""
#         You are a rehabilitation doctor specializing in {request.disease}. 
#         The patient has answered the following questions regarding their condition:\n
#         {response_text}
        
#         Based on this, provide expert medical advice, suggest therapy, and offer emotional support.
#         Do not refer to any sort of person like as psycatrist, instead consider yourself as a doctor and ask the related questions and process them, if at the later stage, its too complicated than only refer to the doctor.otherwise,suggest things that the user can do by him self and keep it short and crisp.
#         """

#         chat_history = [
#             {"role": "system", "content": system_prompt},
#             {"role": "user", "content": "What should I do next?"}
#         ]

#         response = llm.invoke(chat_history)
#         response_text = response.content if hasattr(response, "content") else str(response)

#         return {"response": response_text}

#     except Exception as e:
#         print("Error:", e)
#         raise HTTPException(status_code=500, detail=str(e))


@app.post("/diet")
async def generate_diet_chart(request: DetailedAssessmentRequest):
    """
    Generates a personalized diet plan based on the user's disease and responses.
    """
    try:
        response_text = "\n".join([f"{q}: {a}" for q, a in request.responses.items()])

        diet_prompt = f"""
        You are a dietary expert specializing in creating health-focused meal plans.
        The patient has been diagnosed with {request.disease} and provided the following details:\n
        {response_text}
        
        Based on this information, suggest a structured diet plan that:
        - Is simple and easy to follow.
        - Avoids any references to doctors or medical professionals.
        - Contains breakfast, lunch, dinner, and snack options.
        - Includes key nutrients essential for managing {request.disease}.
        - Avoids foods that may worsen the condition.
        - Provides alternative food choices if necessary.

        Ensure the response is formatted properly, short, and crisp.
        """

        chat_history = [
            {"role": "system", "content": diet_prompt},
            {"role": "user", "content": "What should my diet plan be?"}
        ]

        response = llm.invoke(chat_history)
        response_text = response.content if hasattr(response, "content") else str(response)

        return {"diet_plan": response_text}

    except Exception as e:
        print("Error:", e)
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/chat")
async def chat(request: DetailedAssessmentRequest):
    """
    Handles chat interaction for mental health recovery.
    """
    try:
        if not request.responses:
            raise HTTPException(status_code=400, detail="No responses provided")

        response_text = "\n".join([f"{q}: {a}" for q, a in request.responses.items()])

        system_prompt = f"""
        You are a rehabilitation coach helping users recover from {request.disease}.
        The user has answered the following questions regarding their condition:\n
        {response_text}
        
        Based on this, provide step-by-step recovery suggestions, emotional support, 
        and self-improvement exercises. Do not refer to a psychiatrist or doctor.
        Instead, guide the user on what they can do themselves.
        
        The user should be able to ask follow-up questions, and responses should be 
        clear, short, and actionable.
        """

        chat_history = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": "What should I do next?"}
        ]

        response = llm.invoke(chat_history)
        response_text = response.content if hasattr(response, "content") else str(response)

        return {"response": response_text}

    except Exception as e:
        print("Error:", e)
        raise HTTPException(status_code=500, detail=str(e))