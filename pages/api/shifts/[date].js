import dbConnect from "@/db/connect";
import Nurse from "@/db/models/Nurse";
import Shift from "@/db/models/Shift";

export default async function handler(request, response) {
  await dbConnect();
  const { date } = request.query;

  //API endpoint handler for managing nurse shifts based on the date

  switch (request.method) {
    case "GET":
      try {
        const shift = await Shift.findOne({ date: new Date(date) })
          .populate("morningShift")
          .populate("afternoonShift")
          .populate("nightShift");

        if (!shift) {
          return response
            .status(404)
            .json({ status: "Shift not found for the given date." });
        }
        return response.status(200).json(shift);
      } catch (error) {
        console.error("Error fetching shift:", error);
        return response
          .status(500)
          .json({ status: "Error fetching shift data." });
      }

    case "PUT":
      try {
        const { nurseId, shiftType } = request.body;
        const shiftKey = shiftType;

        let shiftForDate = await Shift.findOne({ date: new Date(date) });

        if (!shiftForDate) {
          // If the shift do not exist, create one
          shiftForDate = new Shift({ date: new Date(date) });
        }

        if (
          shiftForDate.morningShift.includes(nurseId) ||
          shiftForDate.afternoonShift.includes(nurseId) ||
          shiftForDate.nightShift.includes(nurseId)
        ) {
          return response.status(404).json({
            status: "Nurse already assigned for a shift on this date.",
          });
        }
        
        if (!shiftForDate[shiftKey].includes(nurseId)) {
          shiftForDate[shiftKey].push(nurseId);
        }

        await shiftForDate.save();

        const updatedShift = await Shift.findOne({ date: new Date(date) })
          .populate("morningShift")
          .populate("afternoonShift")
          .populate("nightShift");

        return response.status(200).json(updatedShift);
      } catch (error) {
        console.error("Error updating shift:", error);
        return response
          .status(500)
          .json({ status: "Error updating shift data." });
      }

    case "DELETE":
      try {
        const { nurseId, shiftType } = request.body;
        const shiftKey = shiftType;
        const shiftForDate = await Shift.findOne({ date: new Date(date) });

        if (!shiftForDate) {
          return response
            .status(404)
            .json({ status: "Shift not found for the given date." });
        }

        // Remove the nurseId from the specific shiftType
        shiftForDate[shiftKey] = shiftForDate[shiftKey].filter(
          (id) => id.toString() !== nurseId
        );

        await shiftForDate.save();

        const updatedShift = await Shift.findOne({ date: new Date(date) })
          .populate("morningShift")
          .populate("afternoonShift")
          .populate("nightShift");

        return response.status(200).json(updatedShift);
      } catch (error) {
        console.error("Error removing nurse from shift:", error);
        return response
          .status(500)
          .json({ status: "Error removing nurse from shift." });
      }

    default:
      return response.status(405).json({ status: "Method not allowed." });
  }
}
