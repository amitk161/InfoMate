

function GPTResponse({response}) {
  const res = response.data;
  
    return (
    <div className="response">
      {res};
    </div>
  )
}

export default GPTResponse
