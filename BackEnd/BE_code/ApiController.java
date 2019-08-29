@RestController
@RequestMapping(path = "/api")
public class reservationApiController {
    @Autowired
    BusinessService businessService;
    
    @GetMapping(path = "/employees")
    public Map<String, Object> getEmployeesInfoApi(
            @RequestParam(name = "employeeId", required = false, defaultValue = "0") int categoryId) {
        
        List<EmployeeDto> employeeList;
        // 아래와 같은 로직은 Service 레이어로.
        if(employeeId != 0) {
            employeeList = businessService.getEmployeesInfo(employeeId);
            totalCount = businessService.getEmployeesInfoCount(employeeId);
        } else {
            employeeList = businessService.getEmployeesInfo(start);
            totalCount = businessService.getEmployeesInfoCount();
        }
        
        Map<String, Object> map = new HashMap<>();
        map.put("Employees", employeeList);
        map.put("totalCount", totalCount);
        return map;
    }
}