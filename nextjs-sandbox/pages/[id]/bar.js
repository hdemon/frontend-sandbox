function Bar() {
  return <div>bar</div>;
}

export function getStaticProps() {
  return {
    props: {},
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false,
  };
}

export default Bar;
