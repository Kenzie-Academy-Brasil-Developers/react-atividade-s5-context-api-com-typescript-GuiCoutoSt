import toast from "react-hot-toast";

export const success = (message: string) => {
  toast.success(message, {
    style: {
      backgroundColor: "#fff",
      color: "#010101",
      fontWeight: "600",
    },
  });
};

export const error = (message: string) => {
  toast.error(message, {
    style: {
      backgroundColor: "#fff",
      color: "#010101",
      fontWeight: "600",
    },
  });
};
