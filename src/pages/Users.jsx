import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Users() {
    const { allUsers } = useSelector(state => state.users)
    return (
        <>
            <h4 className='my-5 text-center'>Users and their followers</h4>
            <Container className='bg-grey'>
                {allUsers.map(user => <Row>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <Card className='px-5 py-1 mt-3'>
                            <div className="name">{user.attributes.firstName} {user.attributes.lastName}</div>
                            <div className="email">{user.attributes.email}</div>
                        </Card>
                    </Col>
                    {user.attributes.followers.data.filter(dd => dd.id == user.attributes.following.data[0]?.id).length === 1
                        ? <>
                            <Col lg={{ span: 2 }} className='text-center'>
                                <i class="bi bi-arrow-left-right fs-1"></i>
                            </Col>
                            <Col lg={{ span: 4 }}>
                                <Card className='px-5 py-1 mt-3'>
                                    <div className="name">{user.attributes.following.data[0]?.attributes.firstName} {user.attributes.following.data[0]?.attributes.lastName}</div>
                                    <div className="email">{user.attributes.following.data[0]?.attributes.email}</div>
                                </Card>
                            </Col>
                        </>
                        : <>
                            {user.attributes.following.data.length !== 0 && <>
                                <Col lg={{ span: 2 }} className='text-center'>
                                    <i class="bi bi-arrow-right fs-1"></i>
                                </Col>
                                <Col lg={{ span: 4 }}>
                                    <Card className='px-5 py-1 mt-3'>
                                        <div className="name">{user.attributes.following.data[0]?.attributes.firstName} {user.attributes.following.data[0]?.attributes.lastName}</div>
                                        <div className="email">{user.attributes.following.data[0]?.attributes.email}</div>
                                    </Card>
                                </Col>
                            </>
                            }
                        </>
                    }
                </Row>)}
            </Container>
        </>
    )
}
