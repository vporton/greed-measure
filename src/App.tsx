import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Lightbox from 'bs5-lightbox';

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [results, setResults] = useState("");

  const [localChurch, setLocalChurch] = useState(false);
  const [bigMinistry, setBigMinistry] = useState(false);
  const [hungry, setHungry] = useState(false);
  const [osa, setOsa] = useState(false);
  const [neighborhood, setNeighborhood] = useState(false);
  const [wantMoney, setWantMoney] = useState(false);

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
        "This is called in the Gospel to live by the law (rather than by grace).\n" +
        "The Bible says about itself \"letter kills\".\n" +
        "You don't donate out of your own will to really help others. " +
        "You either donate in attempt to earn salvation or in attempt to get money back (as prosperity gospel teaches). " +
        "If you are not doing this consciously, you may nevertheless subconsciously try to earn salvation. " +
        "You are likely going to the Hell.";
    } else { // if (osa)
      results += "You are going to donate to the right cause. " +
        "I don't know whether you are going to the Hell or no, but remember that you cannot earn salvation by your deeds.";
    }

    if (process.env.NODE_ENV === 'production') {
      (window as any).gtag('event', 'greed_survey', {
        localChurch: localChurch,
        bigMinistry: bigMinistry,
        hungry: hungry,
        osa: osa,
        neighborhood: neighborhood,
        wantMoney: wantMoney,
      });
    }
    
    return results;
  }
  
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => {
    setResults(testResults());
    setShow(true);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  useEffect(
    () => document.querySelectorAll('.my-lightbox-toggle').forEach(el => el.addEventListener('click', Lightbox.initialize)),
    [],
  )

  return (
    <>
      <div className="container">
        <h1>Test for Greed and Salvation</h1>
        <p>Pass a short (2-3 min) test for greed. Maybe, you are going to the Hell? Even if you sure you are not, pass the test anyway.</p>
        <p>(2 Corinthians 13:5): <q>Examine yourselves, to see whether you are in the faith. Test yourselves.</q></p>
        <p><Button onClick={handleShow2}>Once saved, always saved?</Button> (Can you lose salvation?)</p>
        <div className="questions">
        <h2 style={{fontStyle: 'italic'}}>Questions</h2>
          <p><label><input type="checkbox" checked={localChurch} onChange={e => setLocalChurch(e.target.checked)}/> You donate to your local church</label></p>
          <p><small>➔ <a href="/donate-to-victor-portons-foundation/">Donate</a> (tax-deductible) for
            {" "}<a href="https://after-gospel.vporton.name/bible-study-meetings-lead-by-man-of-super-revelations-victor-porton/">Bible study</a> by the man to whom God showed in a nightdream that he will preach in
            {" "}<a className="my-lightbox-toggle" href="https://after-gospel.vporton.name/wp-content/uploads/sites/8/2022/05/13-1-2048x1152.jpg">10 buildings each for 20000 seats</a></small></p>
          <p><label><input type="checkbox" checked={bigMinistry} onChange={e => setBigMinistry(e.target.checked)}/> You donate to a world-wide or a national Christian ministry</label></p>
          <p><label><input type="checkbox" checked={hungry} onChange={e => setHungry(e.target.checked)}/> You donate to hungry people</label></p>
          <p><small>➔ <a target='_blank' href="https://after-gospel.vporton.name/donate-to-victor-portons-foundation/" rel="noreferrer">
            Donate for inclusive scientific publishing and for poor scientists</a> (tax-deductible)</small></p>
          <p>Around 1880 there were discovered abstract math objects called <q>groups</q>{" "}
            (this is a math term and is unrelated to usage of the word <q>group</q> in ordinary English).
            During 20th-21th century the importance of groups was on rise. Now most of quantitative sciences rely
            on the concept of groups. All the high-tech economy relies on groups (without groups we hardly would be able to discover
            quantum mechanics, and therefore would have no computers, smartphones, and LCD displays).</p>
          <p>In 2019 there were discovered <q>ordered semicategory actions</q>. By all basic heuristic mathematical
            indications, ordered semicategory actions are as important as groups. But because ordered semicategory actions
            were discovered by an amateur (not a math professor), the texts related to them were published in a wrong
            way (basically, as a too long 400 pages article, not matching the length standards of scientific journals),
            publishing ordered semicategory actions became a challenging task. Because they are not officially published,
            mathematicians do not want to build new math based on ordered semicategory actions.</p>
          <p>Wrong publication of mathematics is essentially making mankind stupid, as it makes people unable
            to use and develop further innovative thinking methods.</p>
          <p><label><input type="checkbox" checked={osa} onChange={e => setOsa(e.target.checked)}/> You are willing to donate for (re)publishing ordered semicategory actions</label></p>
          <p><label><input type="checkbox" checked={neighborhood} onChange={e => setNeighborhood(e.target.checked)}/> You donate to your local club or neighborhood projects</label></p>
          <p><label><input type="checkbox" checked={wantMoney} onChange={e => setWantMoney(e.target.checked)}/> To want money is bad</label></p>
          <p style={{marginBottom: '4px'}}><Button onClick={handleShow}>Finish the test</Button></p>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Test Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{results}</p>
              <p style={{display: osa ? 'none' : 'block'}}>
                You are likely to be unsaved: After all, your heart is not moved by billions of people that remain stupid
                without proper science.
                {" "}<em>Ordered semigroup actions discovery is like as if they were specifically for testing greed (do you want to use your money
                to change the world or no): a rather small sum of money can very much change the entire world.</em>{" "}
                Now (either for the first time, or refreshing your first salvation prayer)
                make the decision that with help of God you will choose to do good deeds. Tell God that you are unable
                to do good on your own, but need help of crucified Jesus Christ.
                (Jam. 2:22)
                {" "}<q>See you how faith wrought with his works, and by works was faith made perfect</q>.
                Salvation is by faith, but faith is a decision, people make decisions when <em>do</em> something,
                you receive faith and reject heresies when you do a good deed. So, do the first good deed:
                {" "}<a href="/donate-to-victor-portons-foundation/">Donate to the charity that is responsible for
                ordered semicategory actions</a> to avoid mankind to remain stupid without knowledge of
                ordered semicategory actions. <em>If you told God that you since now do good deeds, but don't do the first deed,
                God won't believe you,</em> if you don't do good, it is a sure sign of some heresy.
                You now decide you are against the <q>Hitler</q> (money loaded scientific publishers) or if you
                are not against, then you are for Hitler.
                You took the decision to do only good deeds as much as you can, with the help of crucified Jesus Christ,
                that was crucified to help you do good?
                If yes, since now you are apparently not anymore going to the Hell but to the Heaven.
                Salvation is by faith in Jesus Christ who helps you to do good, that is when you believe
                that good deeds that you planned will be accomplished with His help.
              </p>
              <p style={{display: osa ? 'block' : 'none'}}>
                You did the right decision to donate for ordered semicategory actions.
                Please <a href="/donate-to-victor-portons-foundation/">donate to the responsible charity</a> now.
                Publishing ordered semicategory actions is as important as to win a world war.
                You now decide you are against the <q>Hitler</q> (money loaded scientific publishers) or if you
                are not against, then you are for Hitler.</p>
              <p style={{display: osa ? 'block' : 'none'}}>Maybe, you are going to the Paradise, but only in the case if you understand that you cannot
                do good on your own, but only with help of crucified Jesus Christ.</p>
              <p>Jesus said (Mt. 25:45-46) <q>Verily I say to you, Inasmuch as ye did it not to one of the smallest of these, you did it not to me...
                And these shall go away into everlasting punishment: but the righteous into life eternal.</q>{" "}
                and our charity is one of the smallest: as of Jul 2023, only one person works here. That's a reason to help.</p>
              <p><em>(a quote from <a target='_blank' href="https://after-gospel.vporton.name/2022/09/06/stages/" rel="noreferrer">this page</a>)</em> For a long time I tried to bless my enemies, but repeatedly when I tried to pronounce a blessing, I noticed that the phrase that I was
                going to pronounce turned out to be a curse. I found no blessing for these who don’t participate in publishing my math research.
                You may be a drunker, beat your children, liar, aggressive, etc. – I could pray for you. But if you refuse to participate
                (for example, by your money) in publishing ordered semigroup actions and discontinuous analysis – I can’t find mercy for you,
                because you choose not to support the entire mankind following instead your personal interests (that is consider yourself more
                important than 10 billion people).</p>
              <p style={{display: wantMoney ? 'block' : 'none'}}>
                If you think that to want money is bad, then you are greedy, because you don't understand
                1. that one may want money to help others; 2. that money are not only for superfluous luxuries but also
                for good things such as food.
              </p>
              <h2>Related Links</h2>
              <ul>
                <li>Review heresies popular in modern church:
                  {" "}<a target='_blank' rel="noreferrer" href='https://after-gospel.vporton.name/2021/08/25/all-church-are-heretics-both-baptists-and-pentecostals/'>here</a> and
                  {" "}<a target='_blank' rel="noreferrer" href='https://after-gospel.vporton.name/2023/01/03/popular-economical-heresies/'>here</a>.</li>
                <li>If you want <em>biblical</em> arguments that you should donate namely to this charity,
                  {" "}<a href="https://after-gospel.vporton.name/2023/06/20/why-am-i-the-great-priest-of-israel-short-version/">see here</a>{" "}
                  (a long text).</li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={show2} onHide={handleClose2} onShow={() => document.querySelectorAll('.in-dialog-lightbox-toggle').forEach(el => el.addEventListener('click', Lightbox.initialize))}>
            <Modal.Header closeButton>
              <Modal.Title>Once Saved, Always Saved?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>There is the teaching <q>Once saved, always saved.</q> meaning that whatever happens a human cannot lose salvation in Christ.
                Is it true?</p>
              <p>Yes and no.</p>
              <p>Traditional Christianity teaches that the mind of a human is located in the soul.
                But we know from science that mind of a human is located in the brain.
                Even the Bible itself confirms it: (1Tim. 4:2) <q>having their conscience seared with a hot iron.</q>{" "}
                This means that hot iron touching human head (as Romans did with their slaves)
                may damage conscience in the brain. Accordingly the Bible, conscience belongs to the brain.
                Soul is, apparently, a warranty or insurance that God will restore a human in sound mind on the resurrection of dead.
                So, just because of a hot iron touching your head, you can lose conscience and... lose salvation?
                No, we have a warranty from God, that whatever happens with our body (and the brain), He will resurrect us.
                But if your brain behaves badly, we can lose a part of our memory in resurrection of the dead
                (lose salvation for a certain period of the life). Therefore, (Phil. 2:12)
                {" "}<q>work out your own salvation with fear and trembling</q>, because at any moment if your brain wents wrong,
                you can lose salvation of some period of your life. Test and renew your salvation often, don't forget about the grace.
                If you, for example, don't feed a hungry person, it is a sign that you lost salvation for this period of your life.</p>
              <p><strong><a href="/donate-to-victor-portons-foundation/">Donate</a></strong> (tax-deductible) for
                {" "}<a href="https://after-gospel.vporton.name/bible-study-meetings-lead-by-man-of-super-revelations-victor-porton/">Bible study</a> by the man who received
                the final revelation on whether salvation can be lost and to whom God showed in a nightdream that he will preach in
                {" "}<a className="in-dialog-lightbox-toggle" href="https://after-gospel.vporton.name/wp-content/uploads/sites/8/2022/05/13-1-2048x1152.jpg">10 buildings each for 20000 seats</a>.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <p style={{marginTop: '1.5ex'}}><a href="/">Return to the site.</a></p>
      </div>
    </>
  )
}

export default App;

