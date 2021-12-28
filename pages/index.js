import { useRef, useEffect } from "react";
import FifthFold from "../components/FifthFold";
import FirstFold from "../components/FirstFold";
import FourthFold from "../components/FourthFold";
import SecondFold from "../components/SecondFold";
import ThirdFold from "../components/ThirdFold";
import Footer from "../components/Footer";

export default function Home({ posts }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
  }, []);
  return (
    <div className="App" ref={ref}>
      <section className="section-container first-fold" id="introduction">
        <FirstFold />
      </section>
      <section className="section-container" id="who-am-i">
        <SecondFold />
      </section>
      <section className="section-container" id="skills-and-experience">
        <ThirdFold />
      </section>
      <section className="section-container" id="work-ive-done">
        <FourthFold posts={posts} />
      </section>
      <section className="section-container" id="contact-me">
        <FifthFold />
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://wordpress-384045-2292139.cloudwaysapps.com/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query AllPostsQuery {
          posts {
            nodes {
              slug
              content
              title
              websiteUrl {
                url
              }
            }
          }
        }
         `,
      }),
    }
  );

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}
