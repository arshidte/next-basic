//Fetching data
const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
}

interface Params {
  params: { name: "String" },
}

const page = async ({ params }: Params) => {
  const getAge = await getPredictedAge(params.name);
  return (
    <div>
      {params.name}<br />
      The predicted age is: {getAge?.age}
    </div>
  );
}

export default page;