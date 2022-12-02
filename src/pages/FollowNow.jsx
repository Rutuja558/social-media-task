import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { handleFollow } from '../redux/actions/followAction'
import { getAllUsers } from '../redux/actions/usersAction'

export default function FollowNow() {
    const { allUsers } = useSelector(state => state.users)
    let { singleUser, follow } = useSelector(state => state.follow)
    const [selectUser, setSelectUser] = useState('')
    const [selectFollowingTo, setSelectFollowingTo] = useState()
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getAllUsers()) }, [follow])
    return (
        <>
            {allUsers.map(item => <p>{JSON.stringify(item)}</p>)}

            {/* <p>{JSON.stringify(singleUser.data?.attributes.following)}</p> */}
            <h4 className='mt-5 text-center'>Follow Now</h4>
            <Container className='bg-grey my-4 pt-5'>
                <Row>
                    <Col lg={{ span: 6 }} className='text-center'>
                        <h3>Select User</h3>
                        <Form.Select onChange={e => {
                            setSelectUser(e.target.value);
                        }}>
                            <option value=''>Select User</option>
                            {allUsers.map(user => <option value={user.id} key={user.attributes.firstName + user.id}>{`${user.attributes.firstName} ${user.attributes.lastName}`}</option>)}
                        </Form.Select>
                    </Col>
                    <Col lg={{ span: 6 }} className='text-center'>
                        <h3>Following To</h3>
                        <Form.Select onChange={e => { setSelectFollowingTo(e.target.value) }}>
                            <option value=''>Select user to whom to follow</option>
                            {allUsers.map(user => <option value={user.id} key={user.attributes.firstName + user.id}>{`${user.attributes.firstName} ${user.attributes.lastName}`}</option>)}
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 12 }} className='text-center'>
                        <Button className="py-2 px-4 my-3 " variant='dark' onClick={e => {
                            dispatch(handleFollow([selectUser, selectFollowingTo]))
                        }
                        }>Follow  </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
