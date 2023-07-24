import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function IndvCat() {
  const [oneCat, setOneCat] = useState({})

  const { id } = useParams();
  useEffect(() => {
    const fetchChosenCat = async () => {
      try {
        const response = await fetch(`/categories/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setOneCat(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchChosenCat();
  }, []);

  return (
    <Card>
      <Card.Img
        src={oneCat.image}
        alt="category"
        fluid
        variant="top"
      />
      <Card.Body>
        <Card.Title>{oneCat.name}</Card.Title>
        <Card.Text>{oneCat.briefDesc}</Card.Text>
      </Card.Body>
    </Card>
  );
}
