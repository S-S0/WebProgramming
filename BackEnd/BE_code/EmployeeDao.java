@Repository
public class CategoryDao {
    // Map 객체로 받는 것 금지
    public List<Map<String, Object>> getEmployeesInfoBefore() {
        return jdbc.queryForList(GET_EMPLOYEES_SQL, Collections.emptyMap());
    }
    // RowMapper를 만들어 받자!
    private RowMapper<EmployeeDto> mapper = BeanPropertyRowMapper.newInstance(EmployeeDto.class);
    public List<EmployeeDto> getEmployeesInfoAfter() {
        return jdbc.queryForList(GET_EMPLOYEES_SQL, Collections.emptyMap(), mapper);
    }
}