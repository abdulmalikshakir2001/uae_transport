import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const bookingData = await request.json()
    
    // Log the booking data on server
    console.log('New booking received:', bookingData)
    
    // Here you would typically save this to a database
    // For now, we'll just return a success response
    
    return NextResponse.json({ 
      success: true, 
      message: 'Booking received',
      bookingId: Date.now().toString()
    })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process booking' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Here you would typically fetch from a database
    // For now, we'll return the localStorage data if it exists
    return NextResponse.json({ 
      success: true,
      bookings: [] // This will be populated with real data later
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
} 