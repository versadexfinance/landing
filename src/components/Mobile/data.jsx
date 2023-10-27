import image from './image/check.svg'

const imageSources = [
    {image},
    {image},
    {image},
    {image}
  ];
  
  const arr = imageSources.map((src, index) => ({

    imageSrc: src
  }));
  
  export default arr;
  