import Tweet from "../components/tweet";
import "./styles.css";

export default function App() {
  /* EDIT ME SO I CONTAIN ALL OF THE DATA
   * THAT IS RENDERED FOR EACH TWEET
   */
  const tweets = [];
  tweets.push(
    <Tweet
      imgSource="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SDKTYGJZKRPD7DKBJVBH73QNYI.jpg"
      imgAlt="Lady Gaga in a large pink dress"
      tweetText="No sleep, bus, club, another club, another club, another club, plane, next place, no sleep, another club, another club…"
      profileName="Lady Gaga"
      username="@ladygaga"
      date="31 May 2017"
      isVerified={true}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://th.bing.com/th/id/OIP.eTFwSNuroGXcGCuKBPMVhgHaHh?w=172&h=180&c=7&r=0&o=5&pid=1.7"
      imgAlt="Warriors"
      tweetText="Warriors face Laker tonight 7pm EST"
      profileName="Golden State Warriors"
      username="@GSW"
      date="29 October 2021"
      isVerified={true}
    />
  );
  tweets.push(
    <Tweet
      imgSource="https://chapmanathletics.com/sports/mwaterpolo/2021-22/photos/0001/hs_philip_maclean.jpg?max_width=510&max_height=600"
      imgAlt="Philip Maclean"
      tweetText="My roommate @thomasMoore is so much cooler than me."
      profileName="Phil Maclean"
      username="@Pmac"
      date="29 October 2021"
      isVerified={false}
    />
  );
  /* EDIT ME SO I DISPLAY A COLUMN OF TWEETS */
  return tweets;
}
