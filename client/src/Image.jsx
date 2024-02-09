/* eslint-disable react/prop-types */
export default function Image({ src, ...rest }) {
  src =
    src && src.includes('https://')
      ? src
      : 'https://airbnb-clone-ysty.onrender.com/uploads/' + src;
  return <img {...rest} src={src} alt={''} />;
}
