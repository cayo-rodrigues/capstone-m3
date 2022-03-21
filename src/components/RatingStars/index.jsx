import { Rating } from "@mui/material";
import { useUser } from "../../providers/user";
import { proWorkingApi } from "../../services/api";
import { Container } from "./styles";

const RatingStars = ({ workerId, value = 0, isEditable = false }) => {
  const { user } = useUser();

  const handleRating = (rating) => {
    proWorkingApi
      .get("/ratings", {
        params: {
          workerId,
          userId: user.user.id,
        },
      })
      .then((res) => {
        proWorkingApi.patch(
          `/ratings/${res.data[0].id}`,
          { stars: rating },
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          proWorkingApi.post(
            "/ratings",
            { stars: rating, workerId, userId: user.user.id },
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          );
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
