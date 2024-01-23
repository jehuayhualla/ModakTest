//
//  RCTCalendar.m
//  ModakTest
//
//  Created by Jesus on 23/01/24.
//

#import <Foundation/Foundation.h>
#import "RCTCalendar.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)
{
    EKEventStore *store = [[EKEventStore alloc] init];
    NSDate *eventDate = [NSDate dateWithTimeIntervalSince1970:([date doubleValue] / 1000.0)];
    [store requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError * _Nullable error) {
        if (!granted) {
            RCTLogInfo(@"Access to store not granted");
        } else {
          [self insertEvent:store name:name location:location date:eventDate];
        }
    }];
}

- (void)insertEvent:(EKEventStore *)store name:(NSString *)name location:(NSString *)location date:(NSDate *)eventDate {
    EKEvent *event = [EKEvent eventWithEventStore:store];
    event.title = name;
    event.location = location;
    event.startDate = eventDate;
    event.endDate = [event.startDate dateByAddingTimeInterval:60*60];

    [event setCalendar:[store defaultCalendarForNewEvents]];
    NSError *err = nil;
    BOOL success = [store saveEvent:event span:EKSpanThisEvent commit:YES error:&err];
    if (!success) {
        RCTLogInfo(@"Error saving event: %@", err);
    } else {
        RCTLogInfo(@"Event Saved");
    }
}

RCT_EXPORT_MODULE()
@end
