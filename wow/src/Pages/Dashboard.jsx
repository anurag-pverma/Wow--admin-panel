import React from "react";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getEntryData } from "../Redux/action";
import moment from "moment";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./dashboard.css";
import { IoLogoAndroid } from "react-icons/io";
import { DiApple } from "react-icons/di";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { DateRangePicker } from "react-date-range";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
  Stack,
  Box,
  Grid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

function Dashboard() {
  const [entrys, setEntrys] = useState([]);
  const [allEntrys, setAllEntrys] = useState([]);
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const fetchProduct = async () => {
    const res = await fetch(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=116`
    );
    const data = await res.json();
    // console.log(data)
    // setEntrys(data.data.data.map((el)=>{
    //   return {...el, id: uuidv4()}
    // }));
    setEntrys(data.data.data);
    setAllEntrys(data.data.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  // console.log(entrys);

  const selectHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= entrys.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const handleSelect = (date) => {
    let filtered = allEntrys.filter((ent) => {
      let entryDate = new Date(ent["created_At"]);
      return (
        entryDate >= date.selection.startDate &&
        entryDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setEntrys(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div>
      <>
        <Box
          color={"white"}
          width="80vw"
          height={"30vh"}
          alignItems="center"
          margin="auto"
          justifyContent="center"
          backgroundColor="rgb(40,48,70)"
        >
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box>
              <Flex gap={5}>
                <Stack
                  backgroundColor="white"
                  borderRadius="50%"
                  height="7vh"
                  width="7vh"
                  color="black"
                ></Stack>
                <Stack>
                  <Text margin="0" padding="0">
                    3154
                  </Text>
                  <Text fontSize="sm" margin="0" padding="0">
                    App installed
                  </Text>
                </Stack>
              </Flex>
            </Box>
            <Box>
              <Flex gap={5}>
                <Stack
                  backgroundColor="white"
                  borderRadius="50%"
                  height="7vh"
                  width="7vh"
                ></Stack>
                <Stack>
                  <Text margin="0" padding="0">
                    900
                  </Text>
                  <Text fontSize="sm" margin="0" padding="0">
                    Active Installed
                  </Text>
                </Stack>
              </Flex>
            </Box>
            <Box>
              <Flex gap={5}>
                <Stack
                  backgroundColor="white"
                  borderRadius="50%"
                  height="7vh"
                  width="7vh"
                ></Stack>
                <Stack>
                  <Text margin="0" padding="0">
                    41.85 %
                  </Text>
                  <Text fontSize="sm" margin="0" padding="0">
                    Churn Rate
                  </Text>
                </Stack>
              </Flex>
            </Box>
            <Box>
              <Flex gap={5}>
                <Stack
                  backgroundColor="white"
                  borderRadius="50%"
                  height="7vh"
                  width="7vh"
                ></Stack>
                <Stack>
                  <Text margin="0" padding="0">
                    2010
                  </Text>
                  <Text fontSize="sm" margin="0" padding="0">
                    App Un-Installed
                  </Text>
                </Stack>
              </Flex>
            </Box>
            <Box>
              <Flex gap={5}>
                <Stack
                  backgroundColor="white"
                  borderRadius="50%"
                  height="7vh"
                  width="7vh"
                ></Stack>
                <Stack>
                  <Text margin="0" padding="0">
                    840
                  </Text>
                  <Text fontSize="sm" margin="0" padding="0">
                    Active App users
                  </Text>
                </Stack>
              </Flex>
            </Box>

            <Box>
              <Flex gap={5}>
                <Stack
                  backgroundColor="white"
                  borderRadius="50%"
                  height="7vh"
                  width="7vh"
                ></Stack>
                <Stack>
                  <Text margin="0" padding="0">
                    14.85 %
                  </Text>
                  <Text fontSize="sm" margin="0" padding="0">
                    Alive Churn Rate
                  </Text>
                </Stack>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </>
      {/* Selectt Date Duration  */}
      <Flex
      margin='auto'
      justifyContent='space-between'
      >
        <Select placeholder='Select option' size='xs' width='10vw' color='white' >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
       <Stack marginRight={'10'}  border='1px solid white' width={'15vw'} textAlign="start">
       <Popover isLazy size='xs' placement='left-start'  >
         <PopoverTrigger>
         <Box
      tabIndex='0'
      role='button'
      aria-label='Some box'
      // bg='gray.300'
      color={'gray.300'}
      children='Select Duration'
    />
         </PopoverTrigger>
         <PopoverContent
          bg='#283046' 
         >
           <PopoverHeader bg={"#161C32"} color="white"  borderColor='blue.800'>Select Duration</PopoverHeader>
           <PopoverArrow />
           <PopoverCloseButton bg={'#283046'} />
           <PopoverBody>
           <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
           </PopoverBody>
         </PopoverContent>
        </Popover>
       </Stack>
      </Flex>

      {/* Table for Data fetching */}


      <TableContainer color="white" backgroundColor="rgb(40,48,70)">
        <Table variant="simple" size="sm">
          <Thead bg="#271C1C">
            <Tr>
              <Th>Date</Th>
              <Th>Day Installs</Th>
              <Th>plateform</Th>
              <Th>Day Uninstalls</Th>
              <Th>plateform</Th>
              <Th>Churn Rate</Th>
              <Th>Churn Plateform</Th>
            </Tr>
          </Thead>

          {entrys.length > 0 && (
            <>
              {entrys.slice(page * 10 - 10, page * 10).map((item, i) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td>{moment.utc(item.created_At).format("LL")}</Td>
                      <Td>{item.totalinstall}</Td>
                      <Td>
                        <Flex>
                          <span>
                            <IoLogoAndroid />
                          </span>
                          <span>{item.android_install}</span>
                        </Flex>
                        <Flex>
                          <span>
                            <DiApple />
                          </span>
                          <span>{item.ios_install}</span>
                        </Flex>
                      </Td>

                      <Td>{item.totaluninstall}</Td>

                      {/* ******** */}
                      <Td>
                        <Flex>
                          <span>
                            <IoLogoAndroid />
                          </span>
                          <span>{item.android_uninstall}</span>
                        </Flex>
                        <Flex>
                          <span>
                            <DiApple />
                          </span>
                          <span>{item.ios_uninstall}</span>
                        </Flex>
                      </Td>
                      {/* ******** */}
                      <Td>{item.totalchurn} %</Td>
                      {/* ******** */}
                      <Td>
                        <Flex>
                          <span>
                            <IoLogoAndroid />
                          </span>
                          <span>{item.android_churn}%</span>
                        </Flex>
                        <Flex>
                          <span>
                            <DiApple />
                          </span>
                          <span>{item.ios_churn}%</span>
                        </Flex>
                      </Td>
                      {/* ******** */}
                    </Tr>
                  </Tbody>
                );
              })}
            </>
          )}
        </Table>
      </TableContainer>

      <Flex>
        {entrys.length > 0 && (
          <div className="pagination">
            <span
              onClick={() => selectHandler(page - 1)}
              className={page > 1 ? "firstpointer" : "pegination__disabled"}
            >
              <MdOutlineKeyboardArrowLeft />
            </span>
            <span
              id="firstpointer"
              onClick={() => selectHandler(page - 2)}
              className={page > 1 ? "" : "pegination__disabled"}
            >
              1
            </span>
            <span
              onClick={() => selectHandler(page - 1)}
              className={page > 1 ? "firstpointer" : "pegination__disabled"}
            >
              2
            </span>
            <span
              onClick={() => selectHandler(page - 1)}
              className={page > 1 ? "firstpointer" : "pegination__disabled"}
            >
              3
            </span>
            {[...Array(entrys.length / 116)].map((_, i) => {
              return (
                <>
                  <span
                    key={i}
                    className={page === i + 1 ? "pagination__selected" : ""}
                    onClick={() => selectHandler(i + 1)}
                  >
                    ...
                  </span>
                </>
              );
            })}
            <span
              onClick={() => selectHandler(page + 1)}
              className={
                page < entrys.length - 1 / 10 ? "" : "pagination__disable"
              }
            >
              117
            </span>
            <span
              id="lastpointer"
              onClick={() => selectHandler(page + 1)}
              className={page < entrys.length / 10 ? "" : "pagination__disable"}
            >
              <BsArrowUpSquareFill />
            </span>
          </div>
        )}
      </Flex>
    </div>
  );
}

export default Dashboard;
