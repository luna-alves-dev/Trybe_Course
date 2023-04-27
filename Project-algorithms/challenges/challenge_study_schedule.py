def study_schedule(permanence_period, target_time):
    try:
        online_students = 0

        for online, offline in permanence_period:
            if online <= target_time <= offline:
                online_students += 1

        return online_students
    except TypeError:
        return None
