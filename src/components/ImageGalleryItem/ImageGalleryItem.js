export default function ImageGalleryItem({ arrayImg }) {
  const markup = arrayImg.map(i => {
    return (
      <li className="ImageGalleryItem" key={i.id}>
        <img
          src={i.webformatURL}
          alt={i.tags}
          className="ImageGalleryItem-image"
          data-large={i.largeImageURL}
        />
      </li>
    );
  });
  return markup;
}
