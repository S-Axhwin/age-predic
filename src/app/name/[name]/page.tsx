import { DisplayCard } from "./DisplayCard"


const fetchDate = async (name: string) => {
    const rawdataAge = await fetch(`https://api.agify.io/?name=${name}`);
    const rawdataGen = await fetch(`https://api.genderize.io/?name=${name}`);
    const rawdataNat = await fetch(`https://api.nationalize.io/?name=${name}`);

    const ageData = await rawdataAge.json();
    const genData = await rawdataGen.json();
    const natData = await rawdataNat.json();
    return { ageData, genData, natData };
}

const page = async({ params }: any) => {
  const { ageData, genData, natData } = await fetchDate(params.name);
  const [age, gen, nat] = [ageData.age, genData.gender, natData.country[0]?.country_id];

  return (
    <div className="grid h-screen w-full place-items-center">
        <DisplayCard age={age as number} gen={gen as string} nat={nat as string} name={params.name as string}/>
    </div>
  )
}

export default page