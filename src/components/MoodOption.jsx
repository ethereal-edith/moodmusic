function MoodOption({ mood, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: mood.bgColor,
        opacity: isSelected ? 1.2 : 0.9, // Visual feedback
      }}
    >
    <span className="emoji">{mood.emoji}</span>
    <br></br>
    <span className="quote">{mood.quote}</span>
    </button>
  );
}

export default MoodOption