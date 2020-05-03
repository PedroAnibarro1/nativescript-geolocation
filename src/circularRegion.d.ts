/**
* A data class that encapsulates common properties for a geolocation.
*/
export class CircularRegion {  

    /**
     * The latitude of the geolocation, in degrees.
     */
    latitude: number;

    /**
     * The longitude of the geolocation, in degrees.
     */
    longitude: number;

    /**
     * The radius (measured in meters) that defines the geographic area’s outer boundary.
     */
    radius: number;

    /**
     * The identifier for the region object.
     */
    identifier: string;

    /**
     * A Boolean indicating that notifications are generated upon entry into the region.
     */
    notifyOnEntry: boolean;

    /**
     * A Boolean indicating that notifications are generated upon entry exit the region.
     */
    notifyOnExit: boolean;

}