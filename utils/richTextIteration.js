const richTextIteration = (arr) => {
  const elements = arr.map((el, index) => {
    return <p key={index}>{el.text}</p>
  });
  
  return (
    <div>
      {elements}
    </div>
  );
}

export default richTextIteration
  