import { RouteProps, Route, LatLng } from "./route.entity"

describe("Route teste", () => {
    test('constructor', () =>{
        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: { lat: 1, lng: 2 },
            endPosition: { lat: 1, lng: 2 }
        }
        let route = new Route(routeProps)
        expect(route.props).toStrictEqual({
            ...routeProps, points: []
        })
    
        routeProps = {
            title: 'minha rota',
            startPosition: { lat: 1, lng: 2 },
            endPosition: { lat: 1, lng: 2 },
            points:[{lat: 1,lng: 2 }]
        }

        route = new Route(routeProps)
        expect(route.id).toBeDefined()
        expect(route.props).toStrictEqual({
            ...routeProps, points: [{ lat: 1, lng: 2 }]
        })
    })

    test('updateTitle method', () =>{
        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {
                lat: 1,
                lng: 2
            },
            endPosition: {
                lat: 1,
                lng: 2
            },
        }
        let route = new Route(routeProps)
        route.updateTitle('title updated')
        expect(route.title).toBe('title updated')
    })

    test('updatePosition method', () =>{
        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {
                lat: 1,
                lng: 2
            },
            endPosition: {
                lat: 1,
                lng: 2
            },
        }
        let route = new Route(routeProps)
        const startPosition: LatLng =  {lat: 3, lng: 4}
        const endPosition: LatLng =  {lat: 4, lng: 5}
        route.updatePosition(startPosition, endPosition)
        expect(route.startPosition).toBe(startPosition)
        expect(route.endPosition).toBe(endPosition)
    })

    test('updatePoints method', () =>{
        let routeProps: RouteProps = {
            title: 'minha rota',
            startPosition: {
                lat: 1,
                lng: 2
            },
            endPosition: {
                lat: 1,
                lng: 2
            },
        }
        let route = new Route(routeProps)
        const points: LatLng[] =  [{lat: 3, lng: 4}, {lat: 4, lng: 5}]
        route.updatePoints(points)
        expect(route.points).toBe(points)
        expect(route.points).toHaveLength(2)
    })
});