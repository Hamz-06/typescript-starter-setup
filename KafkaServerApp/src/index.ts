import initContainer from "@kafka/consumer/consumer.js"
import initAdminSetting from "@kafka/admin/admin.js"

await initAdminSetting()
await initContainer()