import PropTypes from 'prop-types'
import { Form, Input, SubmitBtn } from "./SearchForm.styled";

export const SearchForm = ({value, onSubmit}) => {
    
    return (
        <Form onSubmit={onSubmit}>
            <Input value={value} placeholder="What movie you will serch?"/>
            <SubmitBtn type="submit">Search</SubmitBtn>
        </Form>
    )
}

SearchForm.propTypes = {
    value: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
}