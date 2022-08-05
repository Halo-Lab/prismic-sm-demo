const getSlice = (data, sliceType) => {
  const slice = data.find(el => el.slice_type === sliceType);
  return slice;
}

export default getSlice;