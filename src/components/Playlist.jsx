function Playlist({ mood }) {
  
  if (!mood) return <p>Select a mood to see music!</p>;
  
  return (
    <div  className="playlist-embed"
      dangerouslySetInnerHTML={{ __html: mood.embedCode }} >
    </div>
  );
}

export default Playlist