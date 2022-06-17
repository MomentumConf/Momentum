import {
  SimpleForm,
  TextInput,
  Create,
  required,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from 'react-admin'
import DateTimeInput from 'components/DateTimeInput'
import LocationInput from 'components/LocationInput'

const SessionCreate = (props) => (
  <Create {...props} title="Dodaj sesję">
    <SimpleForm>
      <TextInput source="name" />
      <DateTimeInput source="begins_at" validate={[required()]} />
      <DateTimeInput source="ends_at" />
      <ReferenceInput label="mówca" source="speaker_id" reference="speaker" resettable>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="drugi mówca" source="second_speaker_id" reference="speaker" resettable>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LocationInput />
      <TextInput source="description" multiline />
      <BooleanInput source="is_main_event" label="Główny event" defaultValue={false} />
    </SimpleForm>
  </Create>
)

export default SessionCreate
