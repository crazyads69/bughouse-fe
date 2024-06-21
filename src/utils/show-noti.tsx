import React from 'react'
import { toast } from 'react-toastify'

function Noti({ message }: { message: string }) {
	return <span style={{ fontWeight: 500 }}>{message}</span>
}

class Notify {
	success = (message: string) => toast.success(<Noti message={message} />)
	error = (message: string) => toast.error(<Noti message={message} />)
	warning = (message: string) => toast.warning(<Noti message={message} />)
}

/**
 * Represents a class that provides different types of notifications.
 */
class NotifyType {
	/**
	 * Displays a success notification with the specified message.
	 * @param message - The message to be displayed in the notification.
	 */
	success = (message: string) => toast.success(<Noti message={message} />)

	/**
	 * Displays an error notification with the specified message.
	 * @param message - The message to be displayed in the notification.
	 */
	error = (message: string) => toast.error(<Noti message={message} />)

	/**
	 * Displays a warning notification with the specified message.
	 * @param message - The message to be displayed in the notification.
	 */
	warning = (message: string) => toast.warning(<Noti message={message} />)
}

const ShowNostis = new Notify()
export default ShowNostis
