# admin panel

    {

entryData.data.map((item)=>{
            return(
                <Tbody >
                    <Tr
                    >
                      <Td>{moment.utc(item.created_At).format("LL")}</Td>
                      <Td>{item.totalinstall}</Td>
                      <Td>
                        <Flex>
                        <span><IoLogoAndroid/></span>
                        <span>{item.android_install}</span>
                        
                        </Flex>
                        <Flex>
                        <span><DiApple/></span>
                        <span>{item.ios_install}</span>
                        </Flex>
                      </Td>

                    
                      <Td>{item.totaluninstall}</Td>

                      {/* ******** */}
                      <Td>
                        <Flex>
                        <span><IoLogoAndroid/></span>
                        <span>{item.android_uninstall}</span>
                        
                        </Flex>
                        <Flex>
                        <span><DiApple/></span>
                        <span>{item.ios_uninstall}</span>
                        </Flex>
                      </Td>
                      {/* ******** */}
                      <Td>{item.totalchurn} %</Td>





                        {/* ******** */}
                        <Td>
                        <Flex>
                        <span><IoLogoAndroid/></span>
                        <span>{item.android_churn}%</span>
                        
                        </Flex>
                        <Flex>
                        <span><DiApple/></span>
                        <span>{item.ios_churn}%</span>
                        </Flex>
                      </Td>
                      {/* ******** */}
                      
                    </Tr>



                </Tbody> 

            )
        })
    }











    const dispatch = useDispatch();
    const entryData = useSelector((state)=>state.reducer.entry)
    useEffect(()=>{
      dispatch(getEntryData(entryData))
    },[])
    


Pegination = 

function =<


    const selectHandler = (selectedPage)=>{
      if (selectedPage >= 1 && selectedPage <= entrys.length / 10 && selectedPage !== page) {
        setPage(selectedPage)
      }
    }
>

where we play map
slice(page*10-10, page*10)


  {
    entrys.length>0 &&  <div className='pagination'>
      <span onClick={()=> selectHandler(page-1)} className={page>1?"":"pegination__disabled"}>🔙</span>
      {[...Array(entrys.length/50)].map((_, i)=>{
        return   (
          <>
          <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectHandler(i + 1)}>...</span>
          </>
        )
      })}
       <span onClick={() => selectHandler(page + 1)} className={page < entrys.length / 10 ? "" : "pagination__disable"}>▶</span>

    </div>
  }