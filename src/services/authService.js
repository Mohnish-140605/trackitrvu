import { Auth } from "aws-amplify";

// Sign-Up User
export const signUp = async (username, password, email) => {
  try {
    await Auth.signUp({ username, password, attributes: { email } });
    console.log("User signed up successfully!");
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

// Sign-In User@
export const signIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Sign-Out User
export const signOut = async () => {
  try {
    await Auth.signOut();
    console.log("User signed out successfully!");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
