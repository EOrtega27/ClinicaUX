import React, {useState} from 'react'
import { DoctoresContainer } from './styles'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function ChooseDoctor ({}){

  const doctores = [
    {
      doctor: 'doctor1',
      horario: 'horario1',
      perfil: 'url1'
    },
    {
      doctor: 'doctor2',
      horario: 'horario2',
      perfil: 'url2'
    },
    {
      doctor: 'doctor3',
      horario: 'horario3',
      perfil: 'url3'
    },
    {
      doctor: 'doctor4',
      horario: 'horario4',
      perfil: 'url4'
    },
    {
      doctor: 'doctor5',
      horario: 'horario5',
      perfil: 'url5'
    },
    {
      doctor: 'doctor6',
      horario: 'horario6',
      perfil: 'url6'
    },
    {
      doctor: 'doctor7',
      horario: 'horario7',
      perfil: 'url7'
    }
  ]

  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    borrarSeleccion()

    const row = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
    const checkBoxes = document.getElementsByName('Checkbox')

    setCheck(!check)

    checkBoxes.forEach(checkbox => {
      if(check){
        checkbox.removeAttribute('disabled')
      }
      else {
        row.classList.add('on')
        checkbox.setAttribute('disabled', true)
      }
    })

    event.target.removeAttribute('disabled')
  };

  const borrarSeleccion = () => {
    const rows = document.querySelectorAll('.on')
    rows.forEach(row => row.classList.remove('on'))
  }

  return (<>
    <DoctoresContainer>
      <div className="nose">
        <PerfectScrollbar>
          <div className="tablaDoctores">
            <table>
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Horario</th>
                  <th>Perfil</th>
                  <th className="selecc">Seleccionar</th>
                </tr>
              </thead>
              <tbody>
                {
                  doctores.map((doctor, index) =>
                    <tr key={index}>
                      <td>{doctor.doctor}</td>
                      <td>{doctor.horario}</td>
                      <td>
                        <button>Ver Perfil</button>
                      </td>
                      <td>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChange}
                              name={`Checkbox`}
                              id={`Checkbox ${index}`}
                            />
                          }
                        />
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </PerfectScrollbar>

      </div>
    </DoctoresContainer>
  </>)
}