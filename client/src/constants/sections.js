import { v4 as uuidv4 } from 'uuid';
import Licenses from '../components/Licenses';
import Centers from '../components/Centers/Centers';
import ZoneCreation from '../components/ZoneCreation';
import ZoneListing from '../components/ZoneListing';

import { FcAdvertising, FcDepartment, FcCamcorderPro, FcFlowChart, FcKey, FcPlus, FcList } from 'react-icons/fc';

const lprconnectSections = [
  { key: uuidv4(), title: 'Licencias', link: '/lprconnect/licenses', icon: <FcKey />, element: <Licenses /> },
  { key: uuidv4(), title: 'Centros', link: '/lprconnect/centers', icon: <FcDepartment />, element: <Centers /> },
  {
    key: uuidv4(),
    title: 'Zonas',
    link: '/lprconnect/zones',
    icon: <FcFlowChart />,
    subSections: [
      { key: uuidv4(), title: 'Creación', link: '/lprconnect/zones/creation', icon: <FcPlus />, element: <ZoneCreation /> },
      { key: uuidv4(), title: 'Listado', link: '/lprconnect/zones/listing', icon: <FcList />, element: <ZoneListing /> },
    ],
  },
  {
    key: uuidv4(),
    title: 'Camaras',
    link: '/lprconnect/camaras',
    icon: <FcCamcorderPro />,
    subSections: [
      { key: uuidv4(), title: 'Creación', link: '/lprconnect/camaras/creation', icon: <FcPlus />, element: <ZoneCreation /> },
      { key: uuidv4(), title: 'Listado', link: '/lprconnect/camaras/listing', icon: <FcList />, element: <ZoneListing /> },
    ],
  },
];

const nexocountSections = [
  { key: uuidv4(), title: 'Licencias', link: '/nexocount/licenses', icon: <FcAdvertising />, element: <Licenses /> },
  { key: uuidv4(), title: 'Centros', link: '/nexocount/centers', icon: <FcAdvertising />, element: <Licenses /> },
  {
    key: uuidv4(),
    title: 'Zonas',
    icon: <FcAdvertising />,
    subSections: [
      { key: uuidv4(), title: 'Creación', link: '/nexocount/zones/creation', icon: <FcAdvertising />, element: <Licenses /> },
      { key: uuidv4(), title: 'Listado', link: '/nexocount/zones/listing', icon: <FcAdvertising />, element: <Licenses /> },
    ],
  },
  {
    key: uuidv4(),
    title: 'Salas',
    icon: <FcAdvertising />,
    subSections: [
      { key: uuidv4(), title: 'Creación', link: '/nexocount/rooms/creation', icon: <FcAdvertising />, element: <Licenses /> },
      { key: uuidv4(), title: 'Listado', link: '/nexocount/rooms/listing', icon: <FcAdvertising />, element: <Licenses /> },
    ],
  },
  {
    key: uuidv4(),
    title: 'Sensores',
    icon: <FcAdvertising />,
    subSections: [
      { key: uuidv4(), title: 'Creación', link: '/nexocount/sensors/creation', icon: <FcAdvertising />, element: <Licenses /> },
      { key: uuidv4(), title: 'Listado', link: '/nexocount/sensors/listing', icon: <FcAdvertising />, element: <Licenses /> },
    ],
  },
];

export { lprconnectSections, nexocountSections };
