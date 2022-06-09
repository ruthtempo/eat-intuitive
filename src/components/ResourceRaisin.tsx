import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ResourceRaisin = () => {
  return (
    <>
      <Link className=" btn btn-primary text-white mb-3" to="/resources">Back to Resources</Link>
      <Card>
        <Card.Header>
          Raisin Meditation (Mindfulness)
        </Card.Header>
        <Card.Body>
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">Holding: First, take a raisin and hold it in the palm of your hand or between your finger and thumb.</ListGroup.Item>
            <ListGroup.Item as="li">Seeing: Take time to really focus on it; gaze at the raisin with care and full attention—imagine that you’ve just dropped in from
              Mars and have never seen an object like this before in your life. Let your eyes explore every part of it, examining the highlights
              where the light shines, the darker hollows, the folds and ridges, and any asymmetries or unique features.</ListGroup.Item>
            <ListGroup.Item as="li">Touching: Turn the raisin over between your fingers, exploring its texture. Maybe do this with your eyes closed if that enhances
              your sense of touch.</ListGroup.Item>
            <ListGroup.Item as="li">Smelling: Hold the raisin beneath your nose. With each inhalation, take in any smell, aroma, or fragrance that may arise. As you
              do this, notice anything interesting that may be happening in your mouth or stomach.</ListGroup.Item>
            <ListGroup.Item as="li">Placing: Now slowly bring the raisin up to your lips, noticing how your hand and arm know exactly how and where to position it.
              Gently place the raisin in your mouth; without chewing, noticing how it gets into your mouth in the first place. Spend a few
              moments focusing on the sensations of having it in your mouth, exploring it with your tongue.</ListGroup.Item>
            <ListGroup.Item as="li">Tasting: When you are ready, prepare to chew the raisin, noticing how and where it needs to be for chewing. Then, very
              consciously, take one or two bites into it and notice what happens in the aftermath, experiencing any waves of taste that emanate
              from it as you continue chewing. Without swallowing yet, notice the bare sensations of taste and texture in your mouth and how
              these may change over time, moment by moment. Also pay attention to any changes in the object itself.</ListGroup.Item>
            <ListGroup.Item as="li">Swallowing: When you feel ready to swallow the raisin, see if you can first detect the intention to swallow as it comes up, so that
              even this is experienced consciously before you actually swallow the raisin.</ListGroup.Item>
            <ListGroup.Item as="li">Following: Finally, see if you can feel what is left of the raisin moving down into your stomach, and sense how your body as a
              whole is feeling after you have completed this exercise.</ListGroup.Item>
          </ListGroup>

        </Card.Body>
        <Card.Footer>
          <a href="https://ggia.berkeley.edu/practice/raisin_meditation" className="text-decoration-none">Source</a>
        </Card.Footer>
      </Card>
    </>
  )
}