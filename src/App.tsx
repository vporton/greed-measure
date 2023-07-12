import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [show, setShow] = useState(false);
  const [results, setResults] = useState("");

  const [localChurch, setLocalChurch] = useState(false);
  const [bigMinistry, setBigMinistry] = useState(false);
  const [hungry, setHungry] = useState(false);
  const [osa, setOsa] = useState(false);
  const [neighborhood, setNeighborhood] = useState(false);

  function testResults() {
    let results = "";
    if (!localChurch && !bigMinistry && !hungry && !osa && !neighborhood) {
      results += "You donate to nobody. Apparently you are very greedy and are going to the Hell.\n" +
        "Remember that when several spiders are placed into a can, nobody of them survives.";
    } else if (!localChurch && !bigMinistry && !hungry && !osa) {
      results += "You donate only to your neighbors that you can get money back from them. " +
        "Apparently you are very greedy and are going to the Hell.\n";
    } else if (!osa) {
      results += "You donate only to these who are explicitly told to donate to in the Bible.\n" +
        "You don't donate out of your own will to really help others. " +
        "You are either donate in attempt to earn salvation or in attempt to get money back (as prosperity gospel teaches). " +
        "You are likely going to the Hell";
    } else { // if (osa)
      results += "You are going to donate to the right cause. " +
        "I don't know whether you are going to the Hell or no, but remember that you cannot earn salvation by your deeds.";
    }
    return results;
  }
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setResults(testResults());
    setShow(true);
  };

  return (
    <>
      <div className="container">
        <h1>Test for Greed and Salvation</h1>
        <p>Pass the test for greed. Maybe, you are going to the Hell?</p>
        <div className="questions">
          <p><label><input type="checkbox" checked={localChurch} onChange={e => setLocalChurch(e.target.checked)}/> You donate to your local church</label></p>
          <p><label><input type="checkbox" checked={bigMinistry} onChange={e => setBigMinistry(e.target.checked)}/> You donate to a world-wide or a national Christian ministry</label></p>
          <p><label><input type="checkbox" checked={hungry} onChange={e => setHungry(e.target.checked)}/> You donate to hungry people</label></p>
          <p>Around 1880 there were discovered an abstract math object called <q>groups</q>{" "}
            (this is a math term and is unrelated to usage of the word <q>group</q> in ordinary English).
            During 20th-21th century the importance of groups was on rise. Now most of quantitative sciences rely
            on the concept of groups. Now all the high-tech part of the economy relies on groups (without groups
            we hardly would be able to discover quantum mechanics, and therefore would have no computers, smartphones,
            and LCD displays).</p>
          <p>In 2019 there were discovered <q>ordered semicategory actions</q>. By all basic heuristic mathematical
            indications, ordered semicategory actions are as important as groups. But because ordered semicategory actions
            were discovered by an amateur (not a math professor), the texts related to them were published in a wrong
            way (basically, as a too long 400 pages article, not matching the length standards of scientific journals),
            publishing ordered semicategory actions became a challenging task. As they are not officially published,
            unlike what happened with group theory, mathematicians do not want to build new math based on
            ordered semicategory actions.</p>
          <p>Wrong publication of mathematics is essentially making mankind stupid, as it makes people unable
            to use and develop further innovative thinking methods.</p>
          <p><label><input type="checkbox" checked={osa} onChange={e => setOsa(e.target.checked)}/> You are willing to donate for (re)publishing ordered semicategory actions</label></p>
          <p><label><input type="checkbox" checked={neighborhood} onChange={e => setNeighborhood(e.target.checked)}/> You donate to your local club or neighborhood projects</label></p>
          <p><Button onClick={handleShow}>Finish the test</Button></p>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Test Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{results}</p>
              <p style={{display: osa ? 'none' : 'block'}}>
                You are likely to be unsaved: After all, your heart is not moved by billions of people that remain stupid
                without proper science.
                Review <a target='_blank' rel="noreferrer" href="/2023/01/03/popular-economical-heresies/">economical heresies</a> that control your money.
                Now (either for the first time, or refreshing your first salvation prayer)
                make the decision that with help of God you will choose to do good deeds. Tell God that you are unable
                to do good on your own, but need help of crucified Jesus Christ.
                If you made the choice to do good deeds since now on, do the first good deed:
                {" "}<a href="/donate-to-victor-portons-foundation/">Donate to the charity that is responsible for
                ordered semicategory actions</a> to avoid all the people to remain stupid without knowledge of
                ordered semicategory actions. If you told God that you since now do good deeds, but don't do the first deed,
                God won't believe you.
                You took the decision to do only good deeds as much as you can, with the help of crucified Jesus Christ?
                If yes, since now you are apparently not anymore going to the Hell but to the Heaven.
              </p>
              <p style={{display: osa ? 'block' : 'none'}}>
                You did the right decision to donate for ordered semicategory actions.
                Please <a href="/donate-to-victor-portons-foundation/">donate to the responsible charity</a> now.
                Maybe, you are going to the Paradise, but only in the case if you understand that you cannot
                do good on your own, but only with help of crucified Jesus Christ.
                Please also review heresies popular in modern church:
                {" "}<a target='_blank' rel="noreferrer" href='https://after-gospel.vporton.name/2021/08/25/all-church-are-heretics-both-baptists-and-pentecostals/'>here</a> and
                {" "}<a target='_blank' rel="noreferrer" href='https://after-gospel.vporton.name/2023/01/03/popular-economical-heresies/'>here</a>.
              </p>
              <p>If you want <em>biblical</em> arguments that you should donate namely to this charity,
                <a href="https://after-gospel.vporton.name/2023/06/20/why-am-i-the-great-priest-of-israel-short-version/">see here</a>.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default App;

