import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {""}
            <span className='text-indigo-600 font-bold '>
              Pacientes y citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Pacientes
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes </h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando tus pacientes {""}
            <span className='text-indigo-600 font-bold '>
              Y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
