const a = () => {
  console.time("filter arrray");
  const ab = "mimi";
  setTimeout(() => {
    console.log("timeout");
  }, 15000);
  console.log(ab);
  console.timeEnd("filter arrray");
};

export default a;
