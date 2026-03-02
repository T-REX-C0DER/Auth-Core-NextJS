export default function userProfile({params}:any) {
  return (
    <div>
      <h1>Profile Page</h1>
      <p className=" 
         text-4xl
      ">This is the profile page 
      <span className="font-bold text-2xl ml-2 p-2 rounded bg-gray-300">{params.id}</span>
      </p>
    </div>
  );
}