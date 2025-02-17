import Header from '../components/header';

export default function Page1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4 mt-20">
      <Header />
      <h1 className="text-4xl p-4">Productos</h1>
      <div className="flex flex-row items-center justify-center gap-4">
        <img src="/cakepops.png" alt="" className="w-64 h-64"/>
        <h2 className="text-2xl">Cakepops</h2>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <h2 className="text-2xl">Cookies</h2>
        <img src="/cookie.png" alt=""  className="w-64 h-64"/>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <img src="/cupcake.png" alt=""  className="w-64 h-64"/>
        <h2 className="text-2xl">Cupcake</h2>
      </div>
    </div>
  );
}