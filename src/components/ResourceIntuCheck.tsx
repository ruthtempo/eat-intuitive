import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ResourceIntuCheck = () => {
  return (
    <>
      <Link className=" btn btn-primary text-white mb-3" to="/resources">Back to Resources</Link>
      <Card>
        <Card.Header>
          Quick Intuition Check-In
        </Card.Header>
        <Card.Body>
          Close your eyes and take a deep breath, exhaling slowly…
          Notice what's on your mind, what've you been thinking about…Notice how your body is feeling right now.
          How are you feeling emotionally?
          Do you feel you are more or less in the flow, or do you feel stressed or conflicted?
          Take another deep breath, exhale slowly, and let your awareness move into a deep place inside…
          Is there anything you need to pay attention to that would help you feel more connected to yourself?
          Whether or not you get any specific information or awarenesses, enjoy a moment of rest before you carry on.
        </Card.Body>
        <Card.Footer>
          Author: Shakti Gawain
        </Card.Footer>
      </Card>
    </>
  )
}