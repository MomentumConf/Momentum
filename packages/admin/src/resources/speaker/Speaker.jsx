import {
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  Create,
  Edit,
  SelectInput,
  NumberInput,
  FunctionField,
} from 'react-admin'
// import moment from 'utils/moment'
// import DateTimeInput from 'components/DateTimeInput'
// import { DateTimeField } from 'components/fields'

const images = [
  { id: 'adam-kowalczyk.jpg', name: 'adam-kowalczyk.jpg' },
  { id: 'ania-kowalczyk.jpg', name: 'ania-kowalczyk.jpg' },
  { id: 'dominik-tomaszewski.jpg', name: 'dominik-tomaszewski.jpg' },
  { id: 'gosia-tomaszewska.jpg', name: 'gosia-tomaszewska.jpg' },
  { id: 'jacek-gromadzki.jpg', name: 'jacek-gromadzki.jpg' },
  { id: 'katarzyna-augustyniak.jpg', name: 'katarzyna-augustyniak.jpg' },
  { id: 'krzysztof-persona.jpg', name: 'krzysztof-persona.jpg' },
  { id: 'kuba-kuzynin.jpg', name: 'kuba-kuzynin.jpg' },
  { id: 'luiz-f-cardoso.jpg', name: 'luiz-f-cardoso.jpg' },
  { id: 'lukasz-konieczny.jpg', name: 'lukasz-konieczny.jpg' },
  { id: 'malgorzata-bieniaszewska.jpg', name: 'malgorzata-bieniaszewska.jpg' },
  { id: 'maria-perenc.jpg', name: 'maria-perenc.jpg' },
  { id: 'mateusz-chowaniec.jpg', name: 'mateusz-chowaniec.jpg' },
  { id: 'ola-konieczna.jpg', name: 'ola-konieczna.jpg' },
  { id: 'paulina-kuzynin.jpg', name: 'paulina-kuzynin.jpg' },
  { id: 'revolutionary-art.jpg', name: 'revolutionary-art.jpg' },
  { id: 'ryszard-augustyniak.jpg', name: 'ryszard-augustyniak.jpg' },
  { id: 'serhii-makhiboroda.jpg', name: 'serhii-makhiboroda.jpg' },
  { id: 'szymon-perenc.jpg', name: 'szymon-perenc.jpg' },
  { id: 'zbyszek-zarozny.jpg', name: 'zbyszek-zarozny.jpg' },
]

export const SpeakerList = (props) => (
  <List
    {...props}
    // empty={<Empty />}
    title="Lista mówców"
    exporter={false}
    bulkActionButtons={false}
    // sort={{ field: 'published_at', order: 'DESC' }}
  >
    <Datagrid rowClick="show">
      {/* <DateTimeField source="created_at" format="dddd, D MMMM, HH:mm" withRelative /> */}
      <TextField source="name" emptyText="&mdash;" />
      {/* <TextField source="content" emptyText="&mdash;" /> */}
      <FunctionField
        label="opis"
        render={(record) => (
          <div
            style={{
              maxWidth: '42rem',
              wordWrap: 'break-word',
              maxHeight: '2.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
            }}
          >
            {record['description']}
          </div>
        )}
      />
      {/* <DeleteButton undoable={false} /> */}
    </Datagrid>
  </List>
)

export const SpeakerCreate = (props) => (
  <Create {...props} title="Dodaj powiadomienie">
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <TextInput source="description" multiline />
      <SelectInput source="image" style={{ width: '256px' }} choices={images} resettable />
      <NumberInput
        label="priorytet"
        source="priority"
        helperText="Priorytet na liście, od najmniejszego, 0 - nie wyświetlaj"
      />
    </SimpleForm>
  </Create>
)

export const SpeakerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <TextInput source="description" multiline />
      <SelectInput source="image" style={{ width: '256px' }} choices={images} resettable />
      <NumberInput
        label="priorytet"
        source="priority"
        helperText="Priorytet na liście, od najmniejszego, 0 - nie wyświetlaj"
      />
    </SimpleForm>
  </Edit>
)
