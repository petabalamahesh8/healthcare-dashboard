import ActivityFeed from "./ActivityFeed";


 
function AnatomySection() {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full h-full">
      <h3 className="text-md font-semibold mb-2">Anatomy</h3>
      <div className="relative">
        <img src="https://i.pinimg.com/564x/82/df/dc/82dfdc85abc48d331b0ddcb90e4b6e83.jpg" alt="Human Body" className="w-full" />
        <div className="absolute top-10 left-12 text-green-600 font-semibold">💚 Healthy Heart</div>
        <div className="absolute top-20 right-10 text-green-600 font-semibold">💨 Lungs</div>
        <div className="absolute bottom-10 left-12 text-yellow-600 font-semibold">🦷 Teeth</div>
        <div className="absolute bottom-8 right-12 text-red-600 font-semibold">🦴 Bone (Issue)</div>
      </div>
      
       
    </div>
  );
}
export default AnatomySection;
