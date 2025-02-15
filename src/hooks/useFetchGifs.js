import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsolading] = useState( true )

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsolading(false)
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  };
};

export default useFetchGifs;
