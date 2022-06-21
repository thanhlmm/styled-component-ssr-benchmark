import {
  Accordion, AccordionPanel, Box, Text, TextInput, Button, Menu, DropButton, Nav, Anchor, Tabs, Tab, CheckBox, CheckBoxGroup, DateInput,
  RangeInput,
  Stack,
  FileInput,
  MaskedInput,
  RangeSelector,
  Select,
  Calendar,
  Clock,
  Chart,
  Meter,
  Diagram,
  DataTable,
  Distribution,
  Pagination,
  WorldMap,
  Spinner,
  Carousel,
  Image
} from 'grommet';

const Components = () => {
  return (
    <div>
      <Accordion>
        <AccordionPanel label="Panel 1">
          <Box pad="medium" background="light-2">
            <Text>One</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 2">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
      </Accordion>

      <Button primary label="label" />

      <DropButton
        label="Fancy Selector"
        dropContent={
          <Box pad="large" background="light-2" />
        }
      />

      <Menu
        label="Menu"
        items={[
          { label: 'First Action', onClick: () => { } },
          { label: 'Second Action', onClick: () => { } },
        ]}
      />

      <Nav direction="row" background="brand" pad="medium">
        <Anchor href="#" label="This is" />
        <Anchor href="#" label="The Nav" />
        <Anchor href="#" label="Component" />
      </Nav>



      <Tabs>
        <Tab title="tab 1">
          <Box pad="medium">One</Box>
        </Tab>
        <Tab title="tab 2">
          <Box pad="medium">Two</Box>
        </Tab>
      </Tabs>

      <CheckBox
        checked={true}
        label="interested?"
      />

      <Box pad="medium">
        <CheckBoxGroup options={["Maui", "Kauai", "Oahu"]} />
      </Box>

      <DateInput
        format="mm/dd/yyyy"
        value={(new Date()).toISOString()}
        onChange={({ value }) => { }}
      />

      {/* <FileInput
        name="file"
        onChange={event => {
          const fileList = event.target.files;
          for (let i = 0; i < fileList.length; i += 1) {
            const file = fileList[i];
          }
        }}
      /> */}

      <MaskedInput
        mask={[
          {
            length: [1, 2],
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',],
            regexp: /^1[1-2]$|^[0-9]$/,
            placeholder: 'hh',
          },
          { fixed: ':' },
          {
            length: 2,
            options: ['00', '15', '30', '45'],
            regexp: /^[0-5][0-9]$|^[0-9]$/,
            placeholder: 'mm',
          },
          { fixed: ' ' },
          {
            length: 2,
            options: ['am', 'pm'],
            regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
            placeholder: 'ap',
          },
        ]}
        value=""
        onChange={(event) => {/* event.target.value */ }}
      />

      <RangeInput
        value={10}
      // onChange={event => setValue(event.target.value)}
      />

      <Stack>
        <Box direction="row" justify="between">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
            <Box key={value} pad="small" border={false}>
              <Text style={{ fontFamily: 'monospace' }}>
                {value}
              </Text>
            </Box>
          ))}
        </Box>
        {/* <RangeSelector
          direction="horizontal"
          invert={false}
          min={0}
          max={9}
          size="full"
          round="small"
          values={[3, 7]}
        /> */}

      </Stack>

      <Select
        options={['small', 'medium', 'large']}
        value={'medium'}
      />

      <Calendar
        size="small"
        date={(new Date()).toISOString()}
        onSelect={(date) => { }}
      />

      <Chart
        bounds={[[0, 7], [0, 100]]}
        values={[
          { value: [7, 100], label: 'one hundred' },
          { value: [6, 70], label: 'seventy' },
          { value: [5, 60], label: 'sixty' },
          { value: [4, 80], label: 'eighty' },
          { value: [3, 40], label: 'forty' },
          { value: [2, 0], label: 'zero' },
          { value: [1, 30], label: 'thirty' },
          { value: [0, 60], label: 'sixty' },
        ]}
        aria-label="chart"
      />

      <Clock type="digital" />

      <DataTable
        columns={[
          {
            property: 'name',
            header: <Text>Name</Text>,
            primary: true,
          },
          {
            property: 'percent',
            header: 'Complete',
            render: datum => (
              <Box pad={{ vertical: 'xsmall' }}>
                <Meter
                  values={[{ value: datum.percent }]}
                  thickness="small"
                  size="small"
                />
              </Box>
            ),
          },
        ]}
        data={[
          { name: 'Alan', percent: 20 },
          { name: 'Bryan', percent: 30 },
          { name: 'Chris', percent: 40 },
          { name: 'Eric', percent: 80 },
        ]}
      />

      <Stack guidingChild={1}>
        <Diagram
          connections={[
            {
              fromTarget: '1',
              toTarget: '2',
              thickness: 'xsmall',
              color: 'accent-2',
            },
            {
              fromTarget: '1',
              toTarget: '4',
              thickness: 'xsmall',
              color: 'accent-2',
              type: 'rectilinear',
            },
          ]}
        />
        <Box>
          <Box direction="row">
            <Box id="1" margin="small" pad="medium" background="light-4" />
            <Box id="2" margin="small" pad="medium" background="light-4" />
          </Box>
          <Box direction="row">
            <Box id="3" margin="small" pad="medium" background="light-4" />
            <Box id="4" margin="small" pad="medium" background="light-4" />
          </Box>
        </Box>
      </Stack>

      <Distribution
        values={[
          { value: 50, color: 'light-3' },
          { value: 30, color: 'brand' },
          { value: 20, color: 'graph-0' },
          { value: 10, color: 'light-3' },
          { value: 5, color: 'brand' },
        ]}
      >
        {value => (
          <Box pad="small" background={value.color} fill>
            <Text size="large">{value.value}</Text>
          </Box>
        )}
      </Distribution>

      {/* <Pagination numberItems={237} /> */}

      <Spinner />

      {/* <WorldMap
        color="neutral-1"
        continents={[
          {
            name: 'Africa',
            color: 'light-5',
            onClick: (name) => { },
          },
        ]}
        onSelectPlace={(lat, lon) => { }}
        places={[
          {
            name: 'Sydney',
            location: [-33.8830555556, 151.216666667],
            color: 'accent-2',
            onClick: (name) => { },
          },
        ]}
        selectColor="accent-2"
      /> */}

      <Box height="small" width="medium" overflow="hidden">
        <Carousel fill>
          <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
          <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
        </Carousel>
      </Box>


    </div>
  )
}

export default Components;