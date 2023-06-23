import firebase from "firebase/app";
import "firebase/swipe";

export const getSwipeProfiles = () => {
  return async (dispatch) => {
    try {
      const profiles = await firebase.firestore().collection("users").get();
      dispatch({
        type: "SET_PROFILES",
        payload: profiles.docs.map((doc) => doc.data()),
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const swipeRight = (profileId) => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.userId;
      await firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .update({
          likes: firebase.firestore.FieldValue.arrayUnion(profileId),
        });
      dispatch({ type: "LIKE", payload: profileId });
    } catch (error) {
      console.error(error);
    }
  };
};

export const swipeLeft = (profileId) => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.userId;
      await firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .update({
          dislikes: firebase.firestore.FieldValue.arrayUnion(profileId),
        });
      dispatch({ type: "DISLIKE", payload: profileId });
    } catch (error) {
      console.error(error);
    }
  };
};
