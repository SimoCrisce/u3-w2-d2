import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = function (props) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [elementId, setElementId] = useState(props.asin);

  useEffect(() => {
    setComment({
      comment: {
        ...comment,
        elementId: props.asin,
      },
    });
  }, [props.asin]);
};

const sendComment = async (e) => {
  e.preventDefault();
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWY3YTRjNTllYzAwMTk5MGQ3MDUiLCJpYXQiOjE3MTA4NjE4MjQsImV4cCI6MTcxMjA3MTQyNH0.HC1wgDW-xZtfNUyjpJf3LgFCJZgQsgcPfH1e5K4czIY",
      },
    });
    if (response.ok) {
      alert("Recensione inviata!");
      this.setState({
        comment: {
          comment: "",
          rate: 1,
          elementId: this.props.asin,
        },
      });
    } else {
      throw new Error("Qualcosa è andato storto");
    }
  } catch (error) {
    alert(error);
  }
};
return (
  <div className="my-3">
    <Form onSubmit={sendComment}>
      <Form.Group className="mb-2">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci qui il testo"
          value={this.state.comment.comment}
          onChange={(e) =>
            this.setState({
              comment: {
                ...this.state.comment,
                comment: e.target.value,
              },
            })
          }
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Valutazione</Form.Label>
        <Form.Control
          as="select"
          value={this.state.comment.rate}
          onChange={(e) =>
            this.setState({
              comment: {
                ...this.state.comment,
                rate: e.target.value,
              },
            })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  </div>
);

export default AddComment;
