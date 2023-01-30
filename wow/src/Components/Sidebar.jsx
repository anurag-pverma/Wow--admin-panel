import React, { useState } from "react";
import { Flex, Text, IconButton,  } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { RxDisc } from "react-icons/rx";
import { FiUser, FiLayers, FiZapOff, FiUserPlus } from "react-icons/fi";
import { BiVideo } from "react-icons/bi";
import { MdOutlineReportProblem, MdOutlineNotifications } from "react-icons/md";
import { BsExclamationOctagon, BsHddStack } from "react-icons/bs";

import { Link } from "react-router-dom";
export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      left="5"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === "small" ? "5px" : "10px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >

        
        <IconButton

          background="none"
          mt={5}
          color="#7A71DB"
          _hover={{ color: "#7A71DB"}}
          icon={<RxDisc />}
          fontSize="2xl"
          onClick={() => {
            if (navSize === "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />

        <Link to="/">
          <Flex p={1} borderRadius={2}
       _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <BsHddStack />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              Dashboard
            </Text>
          </Flex>
        </Link>

        <Link to="/wow">
          <Flex p={1} borderRadius={2}
           _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <FiUser />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              Wow User
            </Text>
          </Flex>
        </Link>
        <Link to="/video_clip">
          <Flex p={1} borderRadius={2}
            _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <BiVideo />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              Video CLips
            </Text>
          </Flex>
        </Link>

        <Link to="/reported_content">
          <Flex p={1} borderRadius={2}
          _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            
            <Text fontSize="xl">
              <MdOutlineReportProblem />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              Reported Content
            </Text>
          </Flex>
        </Link>

        <Link to="/category">
          <Flex p={1} borderRadius={2}
           _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <FiLayers />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              Category
            </Text>
          </Flex>
        </Link>

        <Link to="/page-info">
          <Flex p={1} borderRadius={2}
           _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <BsExclamationOctagon />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              Info Page
            </Text>
          </Flex>
        </Link>

        <Link to="/faq">
          <Flex p={1} borderRadius={2}
            _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <FiZapOff />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              FAQ
            </Text>
          </Flex>
        </Link>

        <Link to="/push_notification"
         _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
        >
          <Flex borderRadius={2} p={1}
          _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <MdOutlineNotifications />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              Push Notification
            </Text>
          </Flex>
        </Link>
        {/*  */}

        <Link to="/internal_user">
          <Flex p={1} borderRadius={2}
            _hover={{ bg: "#7A71DB", boxShadow:"1px 2px 9px #b7bdecd5"}}
          >
            <Text fontSize="xl">
              <FiUserPlus />
            </Text>
            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
              {" "}
              Internal User
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      ></Flex>
    </Flex>
  );
}
