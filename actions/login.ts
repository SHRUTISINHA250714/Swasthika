"use server";
import * as z from "zod";
import { LoginSchema } from "../schemas";
import { db } from "@/lib/db";
import { signIn } from "../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { AuthError } from "next-auth";

import { getUserByEmail } from "../data/user";
import { sendVerificationEmail } from "../src/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const login = async (values: any) => {
  const validatedFields = LoginSchema.safeParse(values);
  const { recaptcha_token, ...value } = values;
  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = generateVerificationToken(existingUser.email);

    await sendVerificationEmail(
      (
        await verificationToken
      ).email,
      (
        await verificationToken
      ).token
    );
    return { success: "Confirmation email sent" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials " };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
