import { Rating } from "@mui/material";
import { toast } from "react-toastify";
import { useWorkers } from "../../providers/workers";
import { proWorkingApi } from "../../services/api";
import { Container } from "./styles";

const RatingStars = ({ workerId, value = 0, isEditable = false }) => {
  const user = JSON.parse(localStorage.getItem("@ProWorking:user")) || {};
  const token = localStorage.getItem("@ProWorking:token");
  const { refreshWorkers } = useWorkers();

  const handleRating = (rating) => {
    if (!user.id) {
      return toast.error("Faça login para avaliar");
    }

    proWorkingApi
      .get("/ratings", {
        params: {
          workerId,
          userId: user.id,
        },
      })
      .then((res) => {
        if (!res.data.length) {
          proWorkingApi
            .post(
              "/ratings",
              { stars: rating, workerId, userId: user.id },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then(() => refreshWorkers());
        } else {
          proWorkingApi
            .patch(
              `/ratings/${res.data[0].id}`,
              { stars: rating },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then(() => refreshWorkers());
        }
      });
  };

  return (
    <Container>
      <Rating
        onChange={(e) => handleRating(+e.target.value)}
        name="rating-{workerId}"
        defaultValue={value}
        precision={0.5}
        readOnly={!isEditable}
      />
    </Container>
  );
};

export default RatingStars;
